import './App.css';
import React from 'react'
import Customer from './components/Customer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflow: 'auto'
  },
  table: {
    minWidth: 1080
  }
})

const customerData = [
  {
    id: 1,
    img: 'http://placeimg.com/64/64/any',
    name: 'Kim',
    age: 22,
    job: '학생'
  },
  {
    id: 2,
    img: 'http://placeimg.com/64/64/any',
    name: 'Lee',
    age: 33,
    job: '회사원'
  }
]

class App extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableCell>ID</TableCell>
            <TableCell>사진</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>나이</TableCell>
            <TableCell>직업</TableCell>
          </TableHead>
          <TableBody>
            {
              customerData.map(people => {
                return (
                  <Customer
                    id={people.id}
                    img={people.img}
                    name={people.name}
                    age={people.age}
                    job={people.job}
                  />
                );
              })
            }
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
