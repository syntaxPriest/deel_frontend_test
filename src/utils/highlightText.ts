function stringEscaper (searchContext:string, delimiter?:string) {
    return (searchContext + '')
      .replace(new RegExp('[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\' + (delimiter || '') + '-]', 'g'), '\\$&')
  }

export function highlightFoundSearchQuery(searchContext:string, searchQuery:string) {
    return searchContext.replace(new RegExp("(" + stringEscaper(searchQuery) + ")", 'gi'), "<b>$1</b>");
}