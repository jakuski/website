const selectName = "site-wide-theme-picker";

const ThemePicker = () => {
	return <form>
		<label htmlFor={selectName} className="mr-2">
			Theme
		</label>

		<select name={selectName} className="bg-transparent border-foreground p-1 rounded border">

			<optgroup label="Automatic">
				<option>System Default</option>
			</optgroup>
			
			<optgroup label="Forced">
				<option>Dark</option>
				<option>Light</option>
			</optgroup>

		</select>
	</form>;
};

export default ThemePicker;