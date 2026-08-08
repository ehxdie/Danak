Add-Type -AssemblyName System.Drawing

function Create-Sharp-Transparent-Logo {
    param (
        [string]$InputPath,
        [string]$OutputPath
    )

    $bmp = [System.Drawing.Bitmap]::FromFile($InputPath)
    $width = $bmp.Width
    $height = $bmp.Height

    # Bounding box calculation
    $minX = $width; $minY = $height; $maxX = 0; $maxY = 0

    $bgPixel = $bmp.GetPixel(0, 0)
    $bgR = $bgPixel.R; $bgG = $bgPixel.G; $bgB = $bgPixel.B

    $result = New-Object System.Drawing.Bitmap($width, $height, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

    # Brand Colors: Gold #D9A441 (RGB: 217, 164, 65), Dark Navy #0A2A52 (RGB: 10, 42, 82)
    # Target sharp colors for contrast on dark background: Bright Gold #E5B24B, Pure White #FFFFFF inside star
    $goldColor = [System.Drawing.Color]::FromArgb(255, 235, 185, 75)
    $whiteColor = [System.Drawing.Color]::FromArgb(255, 255, 255, 255)

    for ($y = 0; $y -lt $height; $y++) {
        for ($x = 0; $x -lt $width; $x++) {
            $pixel = $bmp.GetPixel($x, $y)
            $diff = [Math]::Abs([int]$pixel.R - $bgR) + [Math]::Abs([int]$pixel.G - $bgG) + [Math]::Abs([int]$pixel.B - $bgB)

            if ($diff -gt 35) {
                # Determine if this pixel is part of the inner dark blue star
                $isInnerNavy = [Math]::Abs([int]$pixel.R - 11) + [Math]::Abs([int]$pixel.G - 42) + [Math]::Abs([int]$pixel.B - 80) -lt 70
                
                if ($isInnerNavy) {
                    $result.SetPixel($x, $y, $whiteColor)
                } else {
                    # Make gold elements crisp and vibrant
                    $result.SetPixel($x, $y, $goldColor)
                }

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

    $cropWidth = [Math]::Max(1, $maxX - $minX + 1)
    $cropHeight = [Math]::Max(1, $maxY - $minY + 1)
    
    $padding = 20
    $paddedWidth = $cropWidth + ($padding * 2)
    $paddedHeight = $cropHeight + ($padding * 2)

    $cropped = New-Object System.Drawing.Bitmap($paddedWidth, $paddedHeight, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $g = [System.Drawing.Graphics]::FromImage($cropped)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.DrawImage($result, $padding, $padding, (New-Object System.Drawing.Rectangle($minX, $minY, $cropWidth, $cropHeight)), [System.Drawing.GraphicsUnit]::Pixel)
    $g.Dispose()

    $result.Dispose()

    $cropped.Save($OutputPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $cropped.Dispose()

    Write-Host "Sharp transparent logo saved to: $OutputPath"
}

Create-Sharp-Transparent-Logo `
    -InputPath "c:\Users\USER\Work\Sage\Danak\src\assets\Danak Resource Gold Logo.png" `
    -OutputPath "c:\Users\USER\Work\Sage\Danak\src\assets\danak_logo_transparent_sharp.png"
