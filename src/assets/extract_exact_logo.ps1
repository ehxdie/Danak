Add-Type -AssemblyName System.Drawing

function Extract-Transparent-Logo {
    param (
        [string]$InputPath,
        [string]$OutputPath
    )

    $bmp = [System.Drawing.Bitmap]::FromFile($InputPath)
    $width = $bmp.Width
    $height = $bmp.Height

    # Get background color from top-left pixel
    $bgPixel = $bmp.GetPixel(0, 0)
    $bgR = $bgPixel.R
    $bgG = $bgPixel.G
    $bgB = $bgPixel.B

    $result = New-Object System.Drawing.Bitmap($width, $height, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

    $minX = $width; $minY = $height; $maxX = 0; $maxY = 0

    for ($y = 0; $y -lt $height; $y++) {
        for ($x = 0; $x -lt $width; $x++) {
            $pixel = $bmp.GetPixel($x, $y)
            $diff = [Math]::Abs([int]$pixel.R - $bgR) + [Math]::Abs([int]$pixel.G - $bgG) + [Math]::Abs([int]$pixel.B - $bgB)

            if ($diff -gt 25) {
                # Preserve exact pixel color from original logo artwork
                $result.SetPixel($x, $y, $pixel)

                if ($x -lt $minX) { $minX = $x }
                if ($x -gt $maxX) { $maxX = $x }
                if ($y -lt $minY) { $minY = $y }
                if ($y -gt $maxY) { $maxY = $y }
            } else {
                # Make background transparent
                $result.SetPixel($x, $y, [System.Drawing.Color]::Transparent)
            }
        }
    }

    $bmp.Dispose()

    # Crop with padding
    $cropWidth = [Math]::Max(1, $maxX - $minX + 1)
    $cropHeight = [Math]::Max(1, $maxY - $minY + 1)
    
    $padding = 8
    $paddedWidth = $cropWidth + ($padding * 2)
    $paddedHeight = $cropHeight + ($padding * 2)

    $cropped = New-Object System.Drawing.Bitmap($paddedWidth, $paddedHeight, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $g = [System.Drawing.Graphics]::FromImage($cropped)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.DrawImage($result, $padding, $padding, (New-Object System.Drawing.Rectangle($minX, $minY, $cropWidth, $cropHeight)), [System.Drawing.GraphicsUnit]::Pixel)
    $g.Dispose()

    $result.Dispose()

    $cropped.Save($OutputPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $cropped.Dispose()

    Write-Host "Exact original transparent logo saved to: $OutputPath"
}

Extract-Transparent-Logo `
    -InputPath "c:\Users\USER\Work\Sage\Danak\src\assets\Danak Resource Gold Logo.png" `
    -OutputPath "c:\Users\USER\Work\Sage\Danak\src\assets\danak_logo_exact_transparent.png"
