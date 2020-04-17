import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"

import Actass from "../components/actass"
import Actdt from "../components/actdt"
import Actprot from "../components/actprot"
import Actdomcorp from "../components/actdomcorp"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}))

export default function CenteredGrid() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} lg={3}>
          <Actdomcorp />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Actdt />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Actprot />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Actass />
        </Grid>
      </Grid>
    </div>
  )
}
