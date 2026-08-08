Add-Type -AssemblyName System.Drawing

function Create-Horizontal-Navbar-Logo {
    param (
        [string]$InputPath,
        [string]$OutputPath
    )

    $bmp = [System.Drawing.Bitmap]::FromFile($InputPath)
    $width = $bmp.Width
    $height = $bmp.Height

    # Get background color from top-left pixel
    $bgPixel = $bmp.GetPixel(0, 0)
    $bgR = $bgPixel.R; $bgG = $bgPixel.G; $bgB = $bgPixel.B

    # Find bounding box for Logo Mark (top square) vs Text (bottom DANAK)
    # The logo mark is in top half, DANAK text in middle
    # Let's crop Logo Mark: top 0..60% height
    $markMinX = $width; $markMinY = $height; $markMaxX = 0; $markMaxY = 0
    # Text: 60%..95% height
    $textMinX = $width; $textMinY = $height; $textMaxX = 0; $textMaxY = 0

    for ($y = 0; $y -lt $height; $y++) {
        for ($x = 0; $x -lt $width; $x++) {
            $pixel = $bmp.GetPixel($x, $y)
            $diff = [Math]::Abs([int]$pixel.R - $bgR) + [Math]::Abs([int]$pixel.G - $bgG) + [Math]::Abs([int]$pixel.B - $bgB)

            if ($diff -gt 25) {
                if ($y -lt ($height * 0.58)) {
                    if ($x -lt $markMinX) { $markMinX = $x }
                    if ($x -gt $markMaxX) { $markMaxX = $x }
                    if ($y -lt $markMinY) { $markMinY = $y }
                    if ($y -gt $markMaxY) { $markMaxY = $y }
                } else {
                    if ($x -lt $textMinX) { $textMinX = $x }
                    if ($x -gt $textMaxX) { $textMaxX = $x }
                    if ($y -lt $textMinY) { $textMinY = $y }
                    if ($y -gt $textMaxY) { $textMaxY = $y }
                }
            }
        }
    }

    $markW = $markMaxX - $markMinX + 1
    $markH = $markMaxY - $markMinY + 1
    $textW = $textMaxX - $textMinX + 1
    $textH = $textMaxY - $textMinY + 1

    # Create horizontal canvas: Mark on Left, Text on Right
    $gap = 24
    $padding = 8
    $totalW = $markW + $gap + $textW + ($padding * 2)
    $totalH = [Math]::Max($markH, $textH) + ($padding * 2)

    $out = New-Object System.Drawing.Bitmap($totalW, $totalH, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $g = [System.Drawing.Graphics]::FromImage($out)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic

    # Draw Mark
    $markTargetY = $padding + [int](($totalH - ($padding * 2) - $markH) / 2)
    $g.DrawImage($bmp, (New-Object System.Drawing.Rectangle($padding, $markTargetY, $markW, $markH)), (New-Object System.Drawing.Rectangle($markMinX, $markMinY, $markW, $markH)), [System.Drawing.GraphicsUnit]::Pixel)

    # Draw Text
    $textTargetX = $padding + $markW + $gap
    $textTargetY = $padding + [int](($totalH - ($padding * 2) - $textH) / 2)
    $g.DrawImage($bmp, (New-Object System.Drawing.Rectangle($textTargetX, $textTargetY, $textW, $textH)), (New-Object System.Drawing.Rectangle($textMinX, $textMinY, $textW, $textH)), [System.Drawing.GraphicsUnit]::Pixel)

    $g.Dispose()

    # Now make background transparent and refine colors
    $final = New-Object System.Drawing.Bitmap($totalW, $totalH, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    for ($y = 0; $y -lt $totalH; $y++) {
        for ($x = 0; $x -lt $totalW; $x++) {
            $pixel = $out.GetPixel($x, $y)
            $diff = [Math]::Abs([int]$pixel.R - $bgR) + [Math]::Abs([int]$pixel.G - $bgG) + [Math]::Abs([int]$pixel.B - $bgB)

            if ($diff -gt 25) {
                $final.SetPixel($x, $y, $pixel)
            } else {
                $final.SetPixel($x, $y, [System.Drawing.Color]::Transparent)
            }
        }
    }

    $out.Dispose()
    $bmp.Dispose()

    $final.Save($OutputPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $final.Dispose()

    Write-Host "Horizontal logo saved to: $OutputPath"
}

Create-Horizontal-Navbar-Logo `
    -InputPath "c:\Users\USER\Work\Sage\Danak\src\assets\Danak Resource Gold Logo.png" `
    -OutputPath "c:\Users\USER\Work\Sage\Danak\src\assets\danak_logo_horizontal.png"
