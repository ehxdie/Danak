Add-Type -AssemblyName System.Drawing

function Remove-Background {
    param (
        [string]$InputPath,
        [string]$OutputPath,
        [int]$Threshold = 30
    )

    $bmp = [System.Drawing.Bitmap]::FromFile($InputPath)
    $width = $bmp.Width
    $height = $bmp.Height

    # Find bounding box of non-background content
    $minX = $width
    $minY = $height
    $maxX = 0
    $maxY = 0

    # Sample top-left corner pixel as background color
    $bgPixel = $bmp.GetPixel(0, 0)
    $bgR = $bgPixel.R
    $bgG = $bgPixel.G
    $bgB = $bgPixel.B

    $result = New-Object System.Drawing.Bitmap($width, $height, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

    for ($y = 0; $y -lt $height; $y++) {
        for ($x = 0; $x -lt $width; $x++) {
            $pixel = $bmp.GetPixel($x, $y)
            $diff = [Math]::Abs([int]$pixel.R - $bgR) + [Math]::Abs([int]$pixel.G - $bgG) + [Math]::Abs([int]$pixel.B - $bgB)

            if ($diff -gt $Threshold) {
                $result.SetPixel($x, $y, $pixel)
                if ($x -lt $minX) { $minX = $x }
                if ($x -gt $maxX) { $maxX = $x }
                if ($y -lt $minY) { $minY = $y }
                if ($y -gt $maxY) { $maxY = $y }
            } else {
                $result.SetPixel($x, $y, [System.Drawing.Color]::Transparent)
            }
        }
    }

    $bmp.Dispose()

    # Crop tightly to content
    $cropWidth = [Math]::Max(1, $maxX - $minX + 1)
    $cropHeight = [Math]::Max(1, $maxY - $minY + 1)
    
    # Add small padding
    $padding = 10
    $paddedWidth = $cropWidth + ($padding * 2)
    $paddedHeight = $cropHeight + ($padding * 2)

    $cropped = New-Object System.Drawing.Bitmap($paddedWidth, $paddedHeight, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $g = [System.Drawing.Graphics]::FromImage($cropped)
    $g.DrawImage($result, $padding, $padding, (New-Object System.Drawing.Rectangle($minX, $minY, $cropWidth, $cropHeight)), [System.Drawing.GraphicsUnit]::Pixel)
    $g.Dispose()

    $result.Dispose()

    $cropped.Save($OutputPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $cropped.Dispose()

    Write-Host "Processed transparent logo saved to: $OutputPath"
}

Remove-Background `
    -InputPath "c:\Users\USER\Work\Sage\Danak\src\assets\Danak Resource White Background.png" `
    -OutputPath "c:\Users\USER\Work\Sage\Danak\src\assets\danak_logo_transparent.png" `
    -Threshold 30
