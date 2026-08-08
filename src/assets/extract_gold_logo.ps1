Add-Type -AssemblyName System.Drawing

function Remove-Blue-Background {
    param (
        [string]$InputPath,
        [string]$OutputPath,
        [int]$Threshold = 35
    )

    $bmp = [System.Drawing.Bitmap]::FromFile($InputPath)
    $width = $bmp.Width
    $height = $bmp.Height

    # Sample top-left corner pixel as background blue color
    $bgPixel = $bmp.GetPixel(0, 0)
    $bgR = $bgPixel.R
    $bgG = $bgPixel.G
    $bgB = $bgPixel.B

    $minX = $width; $minY = $height; $maxX = 0; $maxY = 0

    $result = New-Object System.Drawing.Bitmap($width, $height, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

    for ($y = 0; $y -lt $height; $y++) {
        for ($x = 0; $x -lt $width; $x++) {
            $pixel = $bmp.GetPixel($x, $y)
            $diff = [Math]::Abs([int]$pixel.R - $bgR) + [Math]::Abs([int]$pixel.G - $bgG) + [Math]::Abs([int]$pixel.B - $bgB)

            if ($diff -gt $Threshold) {
                # Convert dark blue text/icon elements inside to gold/white if needed, or keep gold
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
    
    $padding = 12
    $paddedWidth = $cropWidth + ($padding * 2)
    $paddedHeight = $cropHeight + ($padding * 2)

    $cropped = New-Object System.Drawing.Bitmap($paddedWidth, $paddedHeight, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $g = [System.Drawing.Graphics]::FromImage($cropped)
    $g.DrawImage($result, $padding, $padding, (New-Object System.Drawing.Rectangle($minX, $minY, $cropWidth, $cropHeight)), [System.Drawing.GraphicsUnit]::Pixel)
    $g.Dispose()

    $result.Dispose()

    $cropped.Save($OutputPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $cropped.Dispose()

    Write-Host "Processed transparent gold logo saved to: $OutputPath"
}

Remove-Blue-Background `
    -InputPath "c:\Users\USER\Work\Sage\Danak\src\assets\Danak Resource Gold Logo.png" `
    -OutputPath "c:\Users\USER\Work\Sage\Danak\src\assets\danak_logo_transparent_gold.png" `
    -Threshold 35
