import { defineStore } from 'pinia'
import { ref } from 'vue'
export const defaultStore = defineStore('default', () => {
  const test = ref(0)
  const getTest = () => test.value
  const setTest = (value: number) => (test.value = value)

  return { test, getTest, setTest }
})
