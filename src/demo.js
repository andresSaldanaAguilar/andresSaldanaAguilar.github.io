import React from 'react';
import { makeStyles, rgbToHex } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import Link from '@material-ui/core/Link';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

const lanColumns = [
  { id: 'key', label: 'Languages', minWidth: 170 },
  { id: 'value'  }
];

const dbColumns = [
  { id: 'key', label: 'Databases', minWidth: 170 },
  { id: 'value'  }
];

const testColumns = [
  { id: 'key', label: 'Testing', minWidth: 170 },
  { id: 'value'  }
];

const fmkColumns = [
  { id: 'key', label: 'Technologies', minWidth: 170 },
  { id: 'value'  }
];


function createData(key, value) {
  return { key, value };
}

const lanRows = [
  createData('Java', '4 years'),
  createData('Python', '2 years'),
  createData('Android', '2 years'),
  createData('JavaScript', '3 years'),
];

const dbRows = [
  createData('MySQL', '4 years'),
  createData('OracleDB', '1 year'),
  createData('Postgres', '1 year'),
  createData('MongoDB', '< 1 year'),
];

const testRows = [
  createData('JUnit', '< 1 year'),
  createData('Selenium', '< 1 year')
];

const fmkRows = [
  createData('Spring Boot', '1 year'),
  createData('Spring MVC', '< 1 year'),
  createData('React', '< 1 year'),
  createData('JQuery', '2 years'),
  createData('Maven', '1 year'),
  createData('Git', '3 years'),
];

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container >
        
        <Grid item xs={12} style={{padding:40}}>
          
          <Typography variant="h2" component="h2" gutterBottom>
            Andrés Arnulfo Saldaña Aguilar
          </Typography>

          <Typography variant="h4" gutterBottom>Contact</Typography>
          <Grid container className={classes.root}>
            <Grid item xs={1}>
            <LinkedInIcon style={{ fontSize: 25 }}></LinkedInIcon>
            </Grid>
            <Grid item xs={11}>
            <Typography><Link variant="h7" href="#" >linkedin.com/in/andressaldanaaguilar</Link></Typography>
            </Grid>
          </Grid>
          <Grid container className={classes.root}>
            <Grid item xs={1}>
            <GitHubIcon style={{ fontSize: 25 }}></GitHubIcon>
            </Grid>
            <Grid item xs={11}>
            <Typography><Link href="#" variant="h7" >github.com/andresSaldanaAguilar </Link></Typography>
            </Grid>
          </Grid>
          <Grid container className={classes.root}>
            <Grid item xs={1}>
            <MailIcon style={{ fontSize: 25 }}></MailIcon>
            </Grid>
            <Grid item xs={11}>
            <Typography><Link href="#" variant="h7" >andres.saldana.aguilar@gmail.com</Link></Typography>
            </Grid>
          </Grid>
          <Grid container className={classes.root}>
            <Grid item xs={1}>
            <PhoneIcon style={{ fontSize: 25 }}></PhoneIcon>
            </Grid>
            <Grid item xs={11}>
            <Typography><Link href="#" variant="h7" >5543890085 </Link></Typography>
            </Grid>
          </Grid>

          <p></p>
          
          <Typography variant="h4" gutterBottom>About</Typography>
          <Typography component="h2" gutterBottom><span class="emoji">👨‍💻</span> Computer Systems Engineer since 2020</Typography>
          <Typography component="h2" gutterBottom><span class="emoji">🏫</span> Escuela Superior de Cómputo IPN</Typography>
          <Typography component="h2" gutterBottom><span class="emoji">✍</span> 9.14/10.00 GPA</Typography>
          <Typography component="h2" gutterBottom><span class="emoji">🎖️</span> Honorable mention thesis</Typography>

          <p></p>


          <Typography variant="h4" gutterBottom>Thesis</Typography>
          <Typography variant="h6" gutterBottom>Real time energy production monitoring</Typography>
          <Typography variant="p" gutterBottom>
            My thesis partners and I investigated and developed a system capable of
            real time energy production monitoring from distinct sources, alerting
            related problems on an android application. Logic was contained by an embedded server,
            processing and signal treatment was handled by a microcontroller.
          </Typography>
          
          <p></p>

          <Typography variant="h4" gutterBottom>Experience</Typography>
          <Typography variant="h6" gutterBottom>Freelance - Full-Stack developer and analyst (November 2017 - July 2018)</Typography>
          <Typography variant="p" gutterBottom>
            Analysis, design and developing of web platform for train stoplights issues reporting, shorting report
            time and attendance all over the country.
            This platform was developed with Laravel framework and deployed on a linux cloud sever.
                </Typography>

          <Typography variant="h6" gutterBottom>E-Global Software Developer Intern (August 2019 - November 2019)</Typography>
          <Typography variant="p" gutterBottom>
            Developing of web services for client transaction authentication, storage and authorization
            with the use of Spring Boot framework.
            Service Migration from Java EE to Spring Boot.
            Clients: BBVA Bancomer, BanCoppel
                </Typography>

          <Typography variant="h6" gutterBottom>ThinkSkink - Software Engineer Jr (December 2019 - Present)</Typography>
          <Typography variant="p" gutterBottom>
            ThinkSkink - Software Engineer Jr (December 2019 - Present)
            Developing of new backend, frontend, testing and deploying functionalities for business process automatization tool.
            Clients: Telcel, Wom Chile, Nextel y Claro Perú
                </Typography>

          <p></p>

          <Typography variant="h4" gutterBottom>Technical Skills</Typography>
          <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {fmkColumns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth, background:"#f1f1f1"}}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {fmkRows.map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                      {lanColumns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {lanColumns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth, background:"#f1f1f1"}}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {lanRows.map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                      {lanColumns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {dbColumns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth, background:"#f1f1f1"}}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {dbRows.map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                      {lanColumns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {testColumns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth, background:"#f1f1f1"}}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {testRows.map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                      {lanColumns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>

          <p></p>
          <Typography variant="h4" gutterBottom>Hobbies</Typography>
          <Typography component="h2" gutterBottom> <span class="emoji">♟️</span> Chess</Typography>
          <Typography component="h2" gutterBottom><span class="emoji">📷</span> Photography</Typography>
          <Typography component="h2" gutterBottom> <span class="emoji">🎨</span>Arts</Typography>
          <Typography component="h2" gutterBottom><span class="emoji">💻💖</span>And of course, Coding </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
