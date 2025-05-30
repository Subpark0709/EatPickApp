// src/services/ElasticsearchService.ts

/**
 * @file ElasticsearchService.ts
 * @brief This service handles search queries by communicating with our backend, which then interacts with Elasticsearch.
 * 
 * @description
 * This service is responsible for sending search requests from the client application
 * to our backend API (e.g., a Node.js application). The backend API, in turn, constructs
 * the appropriate, secure queries and communicates with the Elasticsearch cluster.
 * This indirect approach is crucial for:
 * 1. Security: Not exposing the Elasticsearch cluster directly to the client.
 * 2. Control: Allowing the backend to validate, sanitize, and potentially enrich search queries.
 * 3. Complexity Management: Offloading complex query construction or aggregations to the backend.
 * It adheres to the Single Responsibility Principle by focusing solely on client-side initiation of search operations.
 * 
 * @example
 * // How to import and use
 * import ElasticsearchService from './ElasticsearchService';
 * const recipes = await ElasticsearchService.searchRecipes("spicy chicken");
 * // const users = await ElasticsearchService.searchUsers("john doe");
 */

// Define basic types for search results (can be more specific based on indices)
interface SearchResultRecipe {
  id: string;
  name: string;
  // other recipe fields relevant to search display from Elasticsearch document
}

interface SearchResultUser {
  id: string;
  username: string;
  // other user fields relevant to search display from Elasticsearch document
}

// This is the endpoint on our backend (e.g., Node.js) that will receive search requests
// and then query Elasticsearch.
const BACKEND_SEARCH_API_URL = 'https://your-api-domain.com/api/v1/search'; // Placeholder for your backend search API

const ElasticsearchService = {
  /**
   * Sends a search query to our backend to search recipes in Elasticsearch.
   * Our backend (e.g., Node.js based) receives this query, constructs a secure and appropriate
   * Elasticsearch query, executes it against the Elasticsearch cluster, and returns the results.
   * @async
   * @param {string} queryText - The user's search query string.
   * @param {object} [options] - Optional parameters like pagination (from, size), filters, etc.
   * @param {number} [options.from=0] - The starting record offset for pagination.
   * @param {number} [options.size=10] - The number of records to return per page.
   * @returns {Promise<SearchResultRecipe[]>} A promise that resolves to an array of recipe search results.
   * @throws {Error} If the API call to our backend fails or the backend reports a search error.
   */
  searchRecipes: async (queryText: string, options: { from?: number; size?: number } = {}): Promise<SearchResultRecipe[]> => {
    const { from = 0, size = 10 } = options;
    console.log(`ElasticsearchService.searchRecipes: Sending query "${queryText}" to backend. Options:`, options);
    
    // The client sends a simplified query/options object to our backend.
    // The backend is responsible for translating this into a full Elasticsearch query.
    // const requestBody = {
    //   query: queryText,
    //   from,
    //   size,
    //   // other filters or options can be added here
    // };

    // const response = await fetch(`${BACKEND_SEARCH_API_URL}/recipes`, { // Example: POST /api/v1/search/recipes
    //   method: 'POST', 
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(requestBody),
    // });

    // if (!response.ok) {
    //   const errorData = await response.json().catch(() => ({ message: 'Search request failed' }));
    //   throw new Error(errorData.message || 'Failed to search recipes via backend');
    // }
    // const results = await response.json(); // Backend should return a structured list of search results
    // return results; // Assuming backend already maps Elasticsearch hits to SearchResultRecipe[]
    
    return Promise.resolve([ // Placeholder
      { id: 'recipe101', name: `Found Recipe for: ${queryText} 1` },
      { id: 'recipe102', name: `Found Recipe for: ${queryText} 2` },
    ]);
  },

  /**
   * Sends a search query to our backend to search users in Elasticsearch.
   * Similar to recipe search, our backend (e.g., Node.js based) handles the direct Elasticsearch interaction.
   * @async
   * @param {string} queryText - The user's search query string (e.g., username, name).
   * @param {object} [options] - Optional parameters for pagination or filtering.
   * @param {number} [options.from=0] - The starting record offset.
   * @param {number} [options.size=10] - The number of records to return.
   * @returns {Promise<SearchResultUser[]>} A promise that resolves to an array of user search results.
   * @throws {Error} If the API call to our backend fails.
   */
  searchUsers: async (queryText: string, options: { from?: number; size?: number } = {}): Promise<SearchResultUser[]> => {
    const { from = 0, size = 10 } = options;
    console.log(`ElasticsearchService.searchUsers: Sending query "${queryText}" to backend. Options:`, options);

    // const requestBody = { query: queryText, from, size };
    // const response = await fetch(`${BACKEND_SEARCH_API_URL}/users`, { // Example: POST /api/v1/search/users
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(requestBody),
    // });

    // if (!response.ok) {
    //   const errorData = await response.json().catch(() => ({ message: 'User search request failed' }));
    //   throw new Error(errorData.message || 'Failed to search users via backend');
    // }
    // const results = await response.json();
    // return results;

    return Promise.resolve([ // Placeholder
      { id: 'userABC', username: `UserFoundFor_${queryText}1` },
      { id: 'userDEF', username: `UserFoundFor_${queryText}2` },
    ]);
  },

  // Add other search functions for different indices or more complex queries as needed,
  // always by sending the request to our backend API.
};

export default ElasticsearchService;
