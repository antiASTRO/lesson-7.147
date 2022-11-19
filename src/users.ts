import PromptSync from 'prompt-sync'


type User = { firstname: string, lastname: string }

const prompt: PromptSync.Prompt = PromptSync()

let firstname: string = prompt("Enter your Firstname: ")
let lastname: string = prompt("Enter your Lastname: ")
