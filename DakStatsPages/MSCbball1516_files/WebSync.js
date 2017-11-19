// JScript File
function resize()
{
    var windowHeight = document.body.clientHeight - 150;
    windowHeight += "px";
    document.getElementById('contentTable').style.height = windowHeight
}

/**** Display the current webcast in a pop up window  ***************************************
Description:	This Function accepts three parameters and displays the current webcast in a 
                sized pop up window.
Parameters:		associationID (association identifier), 
                sportGenderID (sport gender identifier), 
                compID (competition identifier)
Author:			Eric Bauer	08/23/06
*********************************************************************************************/
function ShowWebcastPopup(associationID, sportGenderID, compID, seasonID)
{
    var url = "/Websync/Pages/WebcastPlayByPlay/WebcastPBP.aspx?association=" + associationID + "&sg=" + sportGenderID + "&compID=" + compID + "&sea=" + seasonID;

    window.open(url, 'mywindow', 'scrollbars=no,width=950,height=760,resizable=yes,top=15');
}


function ShowGameBookPopup(sportGenderID, compID, seasonID) 
{
    var url = "/Websync/Pages/GameBook/GameBook.aspx?seasonID=" + seasonID + "&sg=" + sportGenderID + "&compID=" + compID;
    window.open(url, 'mywindow', 'scrollbars=no,width=950,height=760,resizable=yes');
}

function ShowPrintPopup(queryString, selectedReportValue, overallConf)
{
    window.open(queryString,'printWindow','scrollbars=yes, menubar=yes, titlebar=yes, toolbar=yes, width=975');
}

function PreLoadImages()
{
    if(document.images)
    {
        var pic3 = new Image(158,18); pic3.src = "http://localhost:4716/Websync/Images/NonSelectedTAb_New.gif";
        var pic4 = new Image(158,18); pic4.src = "http://localhost:4716/WebSync/Images/selectedTab_New.gif";
    }
}

/**** onlyNumber ****************************************************
Description:	Function to prevent non-numeric entries into a textbox.
Parameters:		allowPoint - whether to allow the decimal character
Author:			David Seruyange 06/08/06
Modified:		Eric Bauer 06/30/06
Moved:          Cassie Schmidt 09/18/06
********************************************************************/
function onlyNumber(allowPoint)
{        
    if(window.event.keyCode == 13 || (window.event.keyCode > 47 && window.event.keyCode < 58)){
        return true;
    }
    else if(allowPoint == true && window.event.keyCode == 46){
        return true;
    }    
    return false;
}

/**** lPad ***************************************
Description:	This function left pads a string out by the specified number of specified characters
Parameters:		stringToPad - the passed in string that we want to pad out
				numCharacters - the number of characters to pad the string out to
				character - the character to pad the string with
Author:			Drew Riter		11/05/05
Modified:		
********************************************************************/
function lPad(stringToPad, numCharacters, character)
{	
	var stringToReturn = stringToPad;
	var length = stringToReturn.length;
	//don't pad the string unless what's passed in has a length smaller than the specified number of characters
	if (length < numCharacters)
	{
		for(var i = length; i < numCharacters; i++)
		{
			stringToReturn = character + stringToReturn;
		}
	}
	return stringToReturn;
}