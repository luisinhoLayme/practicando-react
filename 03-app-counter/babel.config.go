const config = async () => {
    const presets = [
      [
        '@babel/preset-env',
        {
          targets: {
            node: 'current'
          }
        }
      ]
    ]
  return { presets }
}

export default config
