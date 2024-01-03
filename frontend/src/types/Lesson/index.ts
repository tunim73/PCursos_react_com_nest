interface Lesson {
  id: number
  name: string
  lessonType: {
    id: number
    type: string
  }
  watched:boolean
}