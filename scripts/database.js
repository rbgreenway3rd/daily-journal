/*
 *   Data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

const database = {
    "entries": [
        {
            id: 1,
            date: "07/24/2025",
            concept: "HTML & CSS",
            entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
            mood: "Ok"
        },
        {
            id: 2,
            concept: "Beginning Daily Journal",
            date: "04/19/21",
            entry: "Practicing html and css, learning and struggling with json.",
            mood: "Confused"
        },
        {
            id: 3,
            concept: "Continuing Daily Journal",
            date: "04/20/21",
            entry: "Continuing the Daily Journal project; much less confused since Steve updated/add the missing project chapters.",
            mood: "Good"
        }
        
    ]
}

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const getJournalEntries = () => {
    const copyOfData = [...database.entries]
    return copyOfData
}