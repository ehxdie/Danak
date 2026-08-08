Add-Type -AssemblyName System.Drawing

function Create-Ultra-Bright-High-Visibility-Logo {
    param (
        [string]$InputPath,
        [string]$OutputPath
    )

    $bmp = [System.Drawing.Bitmap]::FromFile($InputPath)
    $width = $bmp.Width
    $height = $bmp.Height

    $bgPixel = $bmp.GetPixel(0, 0)
    $bgR = $bgPixel.R; $bgG = $bgPixel.G; $bgB = $bgPixel.B

    $result = New-Object System.Drawing.Bitmap($width, $height, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

    $minX = $width; $minY = $height; $maxX = 0; $maxY = 0

    for ($y = 0; $y -lt $height; $y++) {
        for ($x = 0; $x -lt $width; $x++) {
            $pixel = $bmp.GetPixel($x, $y)
            $diff = [Math]::Abs([int]$pixel.R - $bgR) + [Math]::Abs([int]$pixel.G - $bgG) + [Math]::Abs([int]$pixel.B - $bgB)

            if ($diff -gt 20) {
                # Check if it's the inner navy star area (dark pixels inside icon frame)
                $isInnerDarkStar = ($pixel.R -lt 50) -and ($pixel.G -lt 75) -and ($pixel.B -lt 120)

                if ($isInnerDarkStar) {
                    # Fill the inner star with pure crisp white (#FFFFFF) so it pops brightly on dark blue background
                    $result.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(255, 255, 255, 255))
                } else {
                    # Boost brightness and saturation of gold lines and gold text
                    $r = [Math]::Min(255, [int]($pixel.R * 1.35))
                    $g = [Math]::Min(255, [int]($pixel.G * 1.35))
                    $b = [Math]::Min(255, [int]($pixel.B * 1.35))
                    $result.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($pixel.A, $r, $g, $b))
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

    # Crop with padding
    $cropWidth = [Math]::Max(1, $maxX - $minX + 1)
    $cropHeight = [Math]::Max(1, $maxY - $minY + 1)
    
    $padding = 10
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

    Write-Host "High visibility logo saved to: $OutputPath"
}

Create-Ultra-Bright-High-Visibility-Logo `
    -InputPath "c:\Users\USER\Work\Sage\Danak\src\assets\Danak Resource Gold Logo.png" `
    -OutputPath "c:\Users\USER\Work\Sage\Danak\src\assets\danak_logo_high_visibility.png"
