function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}

type Fish = {swim: () => void}
type Bird = {fly: () => void}

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined
}

function isBird(pet: Fish | Bird): pet is Bird {
  return (pet as Bird).fly !== undefined
}

function getFood(pet: Fish | Bird): string|void {
  if (isFish(pet)) {
    return 'Fish food'
  }
  if (isBird(pet)) {
    return 'Bird food'
  }
  return
}

interface Circle {
  kind: 'circle',
  radius: number
}

interface Square {
  kind: 'square',
  side: number
}

interface Rectangle {
  kind: 'rectangle',
  length: number,
  width: number
}

interface Triangle {
  kind: 'triangle',
  base: number,
  height: number
}

type Shape = Circle | Square | Rectangle | Triangle

function getTrueShape(shape: Shape) {
  if (shape.kind === 'circle') {
    return 'It s a circle'
  }
  return ''
}

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2

    case "square":
      return shape.side ** 2

    case "rectangle":
      return shape.length * shape.width

    case "triangle":
      return shape.base * shape.height

    default:
      const _defaultforshape: never = shape
      return _defaultforshape
  }
}