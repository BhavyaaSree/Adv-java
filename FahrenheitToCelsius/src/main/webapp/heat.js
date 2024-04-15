function convertToCelsius()
{
	//Read the fahrenheitInput store in variable
	const fahrenheitInput=document.getElementById('fahrenheitInput').value;
	
	//convert the fahrenheit to celsius
	const celsiusTemperature=(parseFloat(fahrenheitInput)-32)*5/9;
	
	//set the output to celsius output field
	document.getElementById('celsiusoutput').value=celsiusTemperature.tofixed(2);
	
}