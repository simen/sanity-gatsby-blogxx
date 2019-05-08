export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5cd32f0bff9c1a23b5b2a44b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blogxx-studio',
                  apiId: 'e8b462f7-6e85-40f6-8c69-3c8194f18614'
                },
                {
                  buildHookId: '5cd32f0b1d798f1f2e0c2c26',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blogxx',
                  apiId: '6ffa17b0-9f60-4ccd-9387-6777ec3e5077'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/simen/sanity-gatsby-blogxx',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blogxx.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
