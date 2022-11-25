export default {
  noOfBooks: (state) => {
    return state.details.length
  },
  issuedBooksCount: (state) => {
    let count = 0
    state.details.forEach(element => {
      if (element.status === 'Booked') {
        count++
      }
    })
    return count
  },
  noOfBooksAvailable: (state) => {
    let count = 0
    state.details.forEach(element => {
      if (element.status === 'Available') {
        count++
      }
    })
    return count
  },
  lostBooksCount: (state) => {
    let count = 0
    state.details.forEach(element => {
      if (element.status === 'Lost') {
        count++
      }
    })
    return count
  },
  newlyAddedBook: (state) => {
    return state.details[state.details.length - 1].title
  },
  upcomingBooks: (state) => {
    return state.upcomingBooks
  }
}
