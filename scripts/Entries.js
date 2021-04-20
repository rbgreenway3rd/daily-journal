/*
    Which function allows this component to get a copy
    of the data? Import it on the following line of code
    and then invoke it on the third line of code.
*/
import { getJournalEntries } from "./database.js";
getJournalEntries = () => {
    const copyOfData = [...database.entries]
    return copyOfData };

export const Entries = () => {
    const entries = ???
    const allEntriesAsHTML = ""


    for (const entry of entries) {
        allEntriesAsHTML += `${'journalDate'} + ${'conceptsCovered'} + ${'journalEntry'} + ${'moodForTheDay'}`
           
        // HTML representation of a journal entry

    }

    return allEntriesAsHTML
}