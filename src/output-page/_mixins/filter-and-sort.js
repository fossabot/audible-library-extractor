import sortName from "@output-mixins/sort/name.js";
import sortTitle from "@output-mixins/sort/title.js";
import sortAmount from "@output-mixins/sort/amount.js";
import sortLength from "@output-mixins/sort/length.js";
import sortRatings from "@output-mixins/sort/ratings.js";
import sortProgress from "@output-mixins/sort/progress.js";
import sortDateAdded from "@output-mixins/sort/dateAdded.js";
import sortFavorites from "@output-mixins/sort/favorites.js";
import sortBookNumbers from "@output-mixins/sort/bookNumbers.js";
import sortReleaseDate from "@output-mixins/sort/releaseDate.js";
import sortStringNameProp from "@output-mixins/sort/stringNameProp.js";

export default {
  mixins: [
    sortName,
    sortTitle,
    sortAmount,
    sortLength,
    sortRatings,
    sortProgress,
    sortDateAdded,
    sortFavorites,
    sortBookNumbers,
    sortReleaseDate,
    sortStringNameProp
  ],
  methods: {
    
    filterBooks: function(books) {
      
      const filterRules = _.filter( this.$store.state.listRenderingOpts.filter, { type: 'filter', active: true });
      const filterExtraRules = _.filter( this.$store.state.listRenderingOpts.filter, { type: 'filterExtras' }); // These mix in with the rest so they are checked active or not...
      
      if (filterRules || filterExtraRules ) {
        
        const runConditionCheck = function( book ) {
          
          const checkExtras = function( o ) {
            
            if ( o.array.length ) {
              let result = false;
              let cFilter = null;
              _.each( o.array, function(filter) { 
                cFilter = filter;
                result = filter.condition(book) ? true : false; 
                if (result) return false;
              });
              
              if ( o.key === 1 ) {
                return result;
              }
              else if ( o.key === 2 ) {
                if ( cFilter.active ) {
                  // return o.prevResult || result;
                  return o.prevResult;
                }
                else { 
                  if ( result ) { return false }
                  else { return o.prevResult}
                }
              }
              
            }
            // If array is empty don't make any changes...
            else {
              return o.key === 1 ? result : o.prevResult;
            }
            
          };
          
          let result = false;
          result = checkExtras({ key: 1, array: filterRules });
          result = checkExtras({ key: 2, array: filterExtraRules, prevResult: result });
          
          return result;
          
        };
        
        return _.filter(books, function(book) {
          return runConditionCheck( book );
        });
      } else {
        return books;
      }
      
    },
    filterBooks2: function(books) {
      
      const filterRules = _.filter( this.$store.state.listRenderingOpts.filter, { type: 'filter', active: true });

      if (filterRules) {
        return _.filter(books, function(book) {
          let result = false;
          _.each(filterRules, function(filter) {
            result = filter.condition(book);
            if (result) return false;
          });
          return result;
        });
      } else {
        return books;
      }
      
    },

    sortBooks: function(books) {
      const sortByItem = _.find( this.$store.state.listRenderingOpts.sort, function( o ) {
        if ( o.key === 'randomize' && o.active ) return true;
        else if ( o.current ) return true;
      });
      
      if ( sortByItem ) {
      
        const sortOptions = {
          books: books,
          direction: sortByItem.active ? "desc" : "asc",
          sortKey: sortByItem.key
        };
        
        switch (sortOptions.sortKey) {
          case "randomize":
            books = _.shuffle(books);
            break;
          case "bookNumbers":
            // sortOptions.seriesName = this.gallery.searchOptions.lists.numberSortSeriesName;
            sortOptions.missingNumber = 0;
            books = this.sortBookNumbers(sortOptions);
            break;
          case "added":
            books = this.sortDateAdded(sortOptions);
            break;
          case "releaseDate":
            books = this.sortReleaseDate(sortOptions);
            break;
          case "authors.name":
          case "narrators.name":
          case "publishers.name":
            books = this.sortStringNameProp(sortOptions);
            break;
          case "title":
            books = this.sortTitle(sortOptions);
            break;
          case "length":
            books = this.sortLength(sortOptions);
            break;
          case "rating":
          case "ratings":
            books = this.sortRatings(sortOptions);
            break;
          case "progress":
            books = this.sortProgress(sortOptions);
            break;
          case "favorite":
            books = this.sortFavorites(sortOptions);
            break;
          case "name":
            books = this.sortName(sortOptions);
            break;
          case "amount":
            books = this.sortAmount(sortOptions);
            break;
        }
      }

      return books;
    }
  }
};