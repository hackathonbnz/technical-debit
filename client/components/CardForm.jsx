import React, { Fragment } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import OutlinedInput from "@material-ui/core/OutlinedInput";
// import InputLabel from "@material-ui/core/InputLabel";
// import MenuItem from "@material-ui/core/MenuItem";
// import FormControl from "@material-ui/core/FormControl";
// import Select from "@material-ui/core/Select";

// const useStyles = makeStyles(theme => ({
//   root: {
//     display: "flex",
//     flexWrap: "wrap"
//   },
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120
//   },
//   selectEmpty: {
//     marginTop: theme.spacing(2)
//   }
// }));

// function SimpleSelect() {
//   const classes = useStyles();
//   const [values, setValues] = React.useState({
//     age: "",
//     name: "hai"
//   });

//   const inputLabel = React.useRef(null);
//   const [labelWidth, setLabelWidth] = React.useState(0);
//   React.useEffect(() => {
//     setLabelWidth(inputLabel.current.offsetWidth);
//   }, []);

//   function handleChange(event) {
//     setValues(oldValues => ({
//       ...oldValues,
//       [event.target.name]: event.target.value
//     }));
//   }

function CardForm() {
  return (
    <Fragment>
      <div>Hey</div>
      {/* <form className={classes.root} autoComplete="off">
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
              Age
            </InputLabel>
            <Select
              value={values.age}
              onChange={handleChange}
              input={
                <OutlinedInput
                  labelWidth={labelWidth}
                  name="age"
                  id="outlined-age-simple"
                />
              }
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </form> */}
    </Fragment>
  );
}

export default CardForm;
