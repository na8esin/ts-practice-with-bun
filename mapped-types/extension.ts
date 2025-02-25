type APerson = {
  id: string
  name: string
}

type IAge<T> = {
  age: number
} & T

type BPerson = IAge<APerson>