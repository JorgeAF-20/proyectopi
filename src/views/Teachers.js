import React from 'react'
import { Menu, MenuItem, View } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
export default function Teachers() {
  return (
    <>
        <View width="4rem">
            <Menu>
                <MenuItem>Option 1</MenuItem>
                <MenuItem>Option 2</MenuItem>
                <MenuItem>Option 3</MenuItem>
            </Menu>
        </View>
    </>  
  )
}
