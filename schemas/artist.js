export default {
  title: 'Artist',
  name: 'artist',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      fields: [
        {
          title: 'Alt Text',
          name: 'altText',
          type: 'string',
        }
      ]
    },
    {
      title: 'Albums',
      name: 'albums',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{ type: 'album' }],
      }]
    },
    {
      title: 'Songs',
      name: 'songs',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{ type: 'song' }]
      }]
    }
  ]
};
