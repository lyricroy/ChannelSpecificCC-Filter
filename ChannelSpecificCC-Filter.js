var CHANNEL_TO_PASS = 1;

function HandleMIDI(e) 
{
	
	if (e.channel == CHANNEL_TO_PASS) 
	{
		if (e instanceof ControlChange) 
		{
			if (e.number == 1) 
			{
				e.trace();
			}
			else
			{
				e.send();
			}
		}
		else
		{
			e.send();
		}
	}
	else 
	{
		e.send();
	}
}

function ParameterChanged (param, value) 
{
		if (param === 0) 
		{
				CHANNEL_TO_PASS = value;
				MIDI.allNotesOff();
		}
}

var PluginParameters = [{
		name:"Pass Only Channel", 
		type:"linear", 
		minValue:1, 
		maxValue:16, 
		numberOfSteps:15, 
		defaultValue:1
}];
