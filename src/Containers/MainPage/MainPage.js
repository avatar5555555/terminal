// @flow

import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import CircularProgress from '@material-ui/core/CircularProgress'

import OperatorCard from 'src/Components/OperatorCard'
import type { MainPageProps } from 'src/types'

class MainPage extends Component<MainPageProps> {
  componentDidMount() {
    this.props.fetchList()
  }

  render() {
    const { list, isLoading, classes } = this.props

    return (
      <Grid container spacing={16} alignItems="center" direction="column">
        {isLoading ? (
          <CircularProgress
            id="spinner"
            size={70}
            className={classes.spinner}
          />
        ) : (
          list.map(item => <OperatorCard key={item.name} {...item} />)
        )}
      </Grid>
    )
  }
}

export default MainPage
