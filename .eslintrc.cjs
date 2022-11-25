module.exports = {
	root    : true,
	extends : [
        "@tivac",
        "plugin:svelte/recommended",
    ],

	plugins   : [ "svelte" ],

	parserOptions : {
		sourceType  : "module",
		ecmaVersion : 2020,
	},

	env : {
		browser : true,
		es2017  : true,
		node    : true,
	},

    rules : {
        "svelte/sort-attributes" : [
            "error",
            {
              order : [
                // `this` property.
                "this",
                // `bind:this` directive.
                "bind:this",
                // `id` attribute.
                "id",
                // `name` attribute.
                "name",
                // `slot` attribute.
                "slot",
                // `--style-props` (Alphabetical order within the same group.)
                { match : "/^--/u", sort : "alphabetical" },
                // `style` attribute, and `style:` directives.
                [ "style", "/^style:/u" ],
                // `class` attribute.
                "class",
                // `class:` directives. (Alphabetical order within the same group.)
                { match : "/^class:/u", sort : "alphabetical" },
                // other attributes. (Alphabetical order within the same group.)
                {
                  match : [ "!/:/u", "!/^(?:this|id|name|style|class)$/u", "!/^--/u" ],
                  sort  : "alphabetical",
                },
                // `bind:` directives (other then `bind:this`), and `on:` directives.
                [ "/^bind:/u", "!bind:this", "/^on:/u" ],
                // `use:` directives. (Alphabetical order within the same group.)
                { match : "/^use:/u", sort : "alphabetical" },
                // `transition:` directive.
                { match : "/^transition:/u", sort : "alphabetical" },
                // `in:` directive.
                { match : "/^in:/u", sort : "alphabetical" },
                // `out:` directive.
                { match : "/^out:/u", sort : "alphabetical" },
                // `animate:` directive.
                { match : "/^animate:/u", sort : "alphabetical" },
                // `let:` directives. (Alphabetical order within the same group.)
                { match : "/^let:/u", sort : "alphabetical" },
              ],
            },
          ],
    },
};
