import { Autocomplete, createFilterOptions, TextField } from "@mui/material";
import SelectInput from "@mui/material/Select/SelectInput"

export const Select1 = ({list,text}) => {
    const filter = createFilterOptions();
    return <>
        <Autocomplete   
            value={text}
            filterOptions={(options, params) => {
                const filtered = filter(options, params);
                const { inputValue } = params;
                return filtered;
            }}
            selectOnFocus
            clearOnBlur
            //onBlur={setCars(listH)}
            handleHomeEndKeys
            id="free-solo-with-text-demo"
            options={list}
            getOptionLabel={(option) => {
                if (typeof option === 'string') {
                    return option;
                }
                if (option.inputValue) {
                    return option.inputValue;
                }
                return option.description;
            }}
            renderOption={(props, option) => {
                const { key, ...optionProps } = props;
                return (
                    <li key={key} {...optionProps}>
                        {option.description}
                    </li>
                );
            }}
            sx={{ width: 300 }}
            freeSolo
            renderInput={(params) => (
                <TextField {...params} label={text} />
            )}
        />
    </>
}