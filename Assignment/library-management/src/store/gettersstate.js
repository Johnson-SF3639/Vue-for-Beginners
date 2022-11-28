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
  },
  catagoryDetails: (state) => {
    var catagoryArray = []
    for (let index = 0; index < state.details.length; index++) {
      var check = false
      if (catagoryArray.length === 0) {
        catagoryArray.push(state.details[index].catagory)
      } else {
        for (let newIndex = 0; newIndex < catagoryArray.length; newIndex++) {
          if (state.details[index].catagory === catagoryArray[newIndex] || index === newIndex) {
            check = true
          }
        }
        if (!check) {
          catagoryArray.push(state.details[index].catagory)
        }
      }
    }
    return catagoryArray
  }
}
