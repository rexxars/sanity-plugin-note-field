import React from 'react'
import { Card, Box, Inline, Heading, Text } from '@sanity/ui'

const NoteField = ({ type }) => {
  const { options } = type
  const { icon, headline, message, tone } = options

  if (!message) return null

  const CustomIcon = icon

  return (
    <Card padding={[3, 3, 4]} radius={3} shadow={1} tone={tone || 'primary'}>
      {headline && (
        <Box marginBottom={3}>
          <Inline space={[1]}>
            {icon && <CustomIcon style={{ fontSize: 24 }} />}
            <Heading as="h5" size={1}>
              {headline}
            </Heading>
          </Inline>
        </Box>
      )}

      <Inline space={[2]}>
        {icon && !headline && <CustomIcon style={{ fontSize: 24 }} />}
        <Text size={[1, 1, 1]} dangerouslySetInnerHTML={{ __html: message }} />
      </Inline>
    </Card>
  )
}

export default NoteField