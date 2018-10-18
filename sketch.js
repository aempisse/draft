function setup() {
    createCanvas(windowWidth, windowHeight)
    frameRate(30)
}

function draw() {
    background(0)
    noFill()

    // HEAD

    stroke(255, 153, 0)
    let rectWidth = width * random(0.45, 0.5)
    let rectHeight = height * random(0.7, 0.8)
    let rectStartX = (width - rectWidth) * 0.5
    let rectStartY = (height - rectHeight) * 0.5

    rect(
        rectStartX,
        rectStartY,
        rectWidth,
        rectHeight
    )
    
    // EYES
    
    stroke(153, 255, 0)
    let ellipseSize = random(280, 300)
    ellipse(
        rectStartX + ellipseSize * 0.5,
        rectStartY + rectHeight * 0.2,
        ellipseSize,
        ellipseSize
    )

    ellipse(
        rectStartX - ellipseSize * 0.5 + rectWidth,
        rectStartY + rectHeight * 0.2,
        ellipseSize,
        ellipseSize
    )

    // MOUTH

    stroke(0, 153, 255)
    let lineHeight = rectStartY + rectHeight * random(0.8, 0.9)
    line(
        rectStartX,
        lineHeight,
        rectStartX + rectWidth,
        lineHeight
    )

    // NOSE

    stroke(0, 255, 153)
    let triangleBaseCenterX = rectStartX + rectWidth * 0.5
    let triangleBaseCenterY = rectStartY + rectHeight * 0.5
    let offsetX = random(50, 80)
    let offsetY = random(70, 100)
    triangle(
        triangleBaseCenterX - offsetX, triangleBaseCenterY,
        triangleBaseCenterX + offsetX, triangleBaseCenterY,
        triangleBaseCenterX, triangleBaseCenterY - offsetY
    )

    // ANTENNAS

    stroke(255, 0, 153)
    let endpointAntennasY = random(0, rectStartY * 0.5)
    let endpointAntennaRightX = random(width * 0.5 + 50, width * 0.5 + 80)
    let endpointAntennaLeftX = random(width * 0.5 - 50, width * 0.5 - 80)
    line(
        width * 0.5,
        rectStartY,
        endpointAntennaRightX,
        endpointAntennasY
    )
    line(
        width * 0.5,
        rectStartY,
        endpointAntennaLeftX,
        endpointAntennasY
    )
}
