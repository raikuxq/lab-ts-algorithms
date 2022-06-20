const {defaultTheme} = require('@vuepress/theme-default')
const {searchPlugin} = require('@vuepress/plugin-search')


module.exports = {
    lang: 'en-US',
    title: '@raikuxq/alg-ds',
    description: 'Algorithms & Data structures',
    theme: defaultTheme({
        repo: 'https://github.com/raikuxq/lab-ts-algorithms',
        docsDir: 'docs',
        navbar: [
            {
                text: 'Guide',
                link: '/guide/',
            },
            {
                text: 'NPM',
                link: 'https://www.npmjs.com/package/@raikuxq/alg-ds'
            }
        ],
        editLink: false,
        sidebar: [
            {
                text: 'Get started',
                link: '/guide/',
                children: [
                    {
                        text: 'Installation',
                        link: '/guide#installation'
                    }
                ]
            },
            {
                text: 'Data structures',
                children: [
                    {
                        text: 'Stack',
                        link: '/guide/data-structures/stack',
                    },
                    {
                        text: 'Queue',
                        link: '/guide/data-structures/queue',
                    },
                    {
                        text: 'Linked List',
                        link: '/guide/data-structures/linked-list',
                    },
                    {
                        text: 'Looped array',
                        link: '/guide/data-structures/looped-array',
                    },
                    {
                        text: 'Hash Table',
                        link: '/guide/data-structures/hash-table',
                    },
                    {
                        text: 'Binary Search Tree',
                        link: '/guide/data-structures/binary-tree',
                    },
                    {
                        text: 'Graph',
                        link: '/guide/data-structures/graph',
                    },
                ]
            },
            {
                text: 'Algorithms',
                children: [
                    {
                        text: 'utils',
                        children: [
                            {
                                text: 'memoize',
                                link: '/guide/algorithms/memoize',
                            },
                        ]
                    },
                    {
                        text: 'searching',
                        children: [
                            {
                                text: 'binary-search',
                                link: '/guide/algorithms/binary-search',
                            },
                        ]
                    },
                    {
                        text: 'math',
                        children: [
                            {
                                text: 'factorial',
                                link: '/guide/algorithms/factorial',
                            },
                            {
                                text: 'fibonacci',
                                link: '/guide/algorithms/fibonacci',
                            },
                            {
                                text: 'matrix-transpose',
                                link: '/guide/algorithms/transpose-matrix',
                            },
                        ]
                    },
                    {
                        text: 'sorting algorithms',
                        children: [
                            {
                                text: 'bubble-sort',
                                link: '/guide/algorithms/sort/bubble',
                            },
                            {
                                text: 'selection-sort',
                                link: '/guide/algorithms/sort/selection',
                            },
                            {
                                text: 'insertion-sort',
                                link: '/guide/algorithms/sort/insertion',
                            },
                            {
                                text: 'merge-sort',
                                link: '/guide/algorithms/sort/merge',
                            },
                            {
                                text: 'quick-sort',
                                link: '/guide/algorithms/sort/quick',
                            }
                        ]
                    },
                    {
                        text: 'graph algorithms',
                        children: [
                            {
                                text: 'iterators',
                                children: [
                                    {
                                        text: 'BFSGraphIterator',
                                        link: '/guide/data-structures/graph/iterator-bfs',
                                    },
                                    {
                                        text: 'DFSGraphIterator',
                                        link: '/guide/data-structures/graph/iterator-dfs',
                                    },
                                    {
                                        text: 'DijkstraGraphIterator',
                                        link: '/guide/data-structures/graph/iterator-dijkstra',
                                    },
                                ]
                            },
                            // {
                            //     text: 'iteration-strategies',
                            //     children: [
                            //         {
                            //             text: 'BFSGraphIterationStrategy',
                            //             link: '/guide/data-structures/graph/iteration-strategy-bfs',
                            //         },
                            //         {
                            //             text: 'DFSGraphIterationStrategy',
                            //             link: '/guide/data-structures/graph/iteration-strategy-dfs',
                            //         },
                            //         {
                            //             text: 'DijkstraGraphIterationStrategy',
                            //             link: '/guide/data-structures/graph/iteration-strategy-dijkstra',
                            //         },
                            //     ]
                            // },
                            {
                                text: 'searching',
                                children: [
                                    {
                                        text: 'has-path',
                                        link: '/guide/data-structures/graph/has-path',
                                    },
                                    {
                                        text: 'shortest-path',
                                        link: '/guide/data-structures/graph/shortest-path',
                                    },
                                ]
                            },
                            {
                                text: 'presenters',
                                children: [
                                    {
                                        text: 'presenter-adjacency-lists',
                                        link: '/guide/data-structures/graph/presenter-adjacency-lists',
                                    },
                                    {
                                        text: 'presenter-adjacency-matrix',
                                        link: '/guide/data-structures/graph/presenter-adjacency-matrix',
                                    },
                                ]
                            },
                            {
                                text: 'utils',
                                children: [
                                    {
                                        text: 'create-graph-from-matrix',
                                        link: '/guide/data-structures/graph/create-graph-from-matrix',
                                    },
                                    {
                                        text: 'transpose-directed-graph',
                                        link: '/guide/data-structures/graph/transpose-directed-graph',
                                    }
                                ]
                            },
                        ]
                    }
                ]
            }
        ],
    }),
    plugins: [
        searchPlugin({
            // options
        }),
    ],
}
