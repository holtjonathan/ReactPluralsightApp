
      //Transform state from AuthorApi data layout to what the SELECT needs
export function authorsFormattedForDropdown(authors) {
    return authors.map(author => {
        return {
          value:author.id,
          text: author.firstName + ' ' + author.lastName
        };
    });
}