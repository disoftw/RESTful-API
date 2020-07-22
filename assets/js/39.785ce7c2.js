(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{760:function(e,t,o){"use strict";o.r(t);var s=o(70),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"naming-consistency"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#naming-consistency"}},[e._v("#")]),e._v(" Naming Consistency")]),e._v(" "),o("p",[e._v("There are some more general rules that will help you to keep your REST API consistent and maintainable.")]),e._v(" "),o("p",[o("strong",[e._v("Always use slash (/) to separate your path portions")])]),e._v(" "),o("p",[e._v("The forward slash character defines the hierarchical relationship between the resources.")]),e._v(" "),o("blockquote",[o("p",[e._v("http://api.example.com/users/{id}/posts")])]),e._v(" "),o("p",[o("strong",[e._v("Never use trailing slash (/)")])]),e._v(" "),o("p",[e._v("Trailing slashes do nothing and may be confusing. It is better to drop them completely.")]),e._v(" "),o("blockquote",[o("p",[e._v("http://api.example.com/users/{id}/posts/  /"),o("em",[e._v("Bad")]),e._v("/")])]),e._v(" "),o("blockquote",[o("p",[e._v("http://api.example.com/users/{id}/posts  /"),o("em",[e._v("Good")]),e._v("/")])]),e._v(" "),o("p",[o("strong",[e._v("Hyphens (-) are good choices to separate words")])]),e._v(" "),o("p",[e._v("Hyphens help users scan and read faster, especially in long URI names.")]),e._v(" "),o("blockquote",[o("p",[e._v("http://api.example.com/users/accessLevels  /"),o("em",[e._v("Bad")]),e._v("/")])]),e._v(" "),o("blockquote",[o("p",[e._v("http://api.example.com/users/access-levels  /"),o("em",[e._v("Good")]),e._v("/")])]),e._v(" "),o("p",[e._v("It is possible to use underscores instead of hyphens, but in some cases (based on system font) they are not clearly visible and not acceptable in URIs.")]),e._v(" "),o("p",[o("strong",[e._v("Always use lowercase letters")])]),e._v(" "),o("p",[e._v("Using lowercase letters in URI paths is always preferred. However, the host component can be in capital letters.")]),e._v(" "),o("blockquote",[o("p",[e._v("http://api.example.org/home/my-file")])]),e._v(" "),o("blockquote",[o("p",[e._v("HTTP://API.EXAMPLE.ORG/home/my-file")])]),e._v(" "),o("blockquote",[o("p",[e._v("http://api.example.org/Home/My-File")])]),e._v(" "),o("p",[e._v("In the example above, all three are the same API, but the third one can cause problems based the implementation and type of the server.")]),e._v(" "),o("p",[o("strong",[e._v("Never use file extensions")])]),e._v(" "),o("p",[e._v("They look bad in URIs and make them longer.")]),e._v(" "),o("p",[e._v("Use other methods to determine the file type; do not rely on the extension.")]),e._v(" "),o("blockquote",[o("p",[e._v("http://api.example.com/files/license.pdf  /"),o("em",[e._v("Bad")]),e._v("/")])]),e._v(" "),o("blockquote",[o("p",[e._v("http://api.example.com/files/license /"),o("em",[e._v("Good")]),e._v("/")])]),e._v(" "),o("p",[o("strong",[e._v("Always use query component to filter URI collection")])]),e._v(" "),o("p",[e._v("Use query components (?, &) to sort, paginate, or give any other parameters to your URI. Never create a new URI to achieve that.")]),e._v(" "),o("blockquote",[o("p",[e._v("http://api.example.com/projects/{id}/run?lang=cpp")])]),e._v(" "),o("blockquote",[o("p",[e._v("http://api.example.com/projects/{id}/run?lang=cpp&type=gcc")])]),e._v(" "),o("p",[o("strong",[e._v("Never use CRUD function names")])]),e._v(" "),o("p",[e._v("Nothing in the URI should indicate what action it is performing.")]),e._v(" "),o("blockquote",[o("p",[e._v("GET http://api.example.com/users/  //Get all users")])]),e._v(" "),o("blockquote",[o("p",[e._v("POST http://api.example.com/users/  //Create new user")])]),e._v(" "),o("blockquote",[o("p",[e._v("GET http://api.example.com/users/{id}  //Get the user with Id")])]),e._v(" "),o("blockquote",[o("p",[e._v("PUT http://api.example.com/users/{id}  //Update the user with Id")])]),e._v(" "),o("blockquote",[o("p",[e._v("DELETE http://api.example.com/users/{id}  //Delete the user with Id")])])])}),[],!1,null,null,null);t.default=a.exports}}]);