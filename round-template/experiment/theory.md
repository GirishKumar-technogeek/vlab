# INTRODUCTION

IOT is a term that refers to a system of interrelated things such as digital machines,electrical and electronic devices etc  which have sensors, software, and other technologies and has the ability to transfer data over a network without requiring human-to-human or human-to-computer interaction.<br>
IOT works on the principle **"Anything that can be connected, will be connected"**.<br>

# CONCEPT

## LED :
LED stands for Light Emitting Diode, and glows when electricity is passed through it.<br>
The LED will have two terminals, you can notice one leg is longer than the other. The longer leg (known as the ‘anode’), is always connected to the positive supply of the circuit. The shorter leg (known as the ‘cathode’) is connected to the negative side of the power supply, known as ‘ground’.<br>
LEDs will only work if power is supplied the correct way round (i.e. if the ‘polarity’ is correct). You will not break the LEDs if you connect them the wrong way round – they will just not light. If the LED does not light in your circuit, it may be because of that, it have been connected the wrong way round.<br>
A simple LED circuit consists of a LED and resistor. The resistor is used to limit the current that is being drawn and is called a current limiting resistor. Without the resistor the LED would run at too high of a voltage, resulting in too much current being drawn which in turn would instantly burn the LED, and likely also the GPIO port on the Raspberry Pi.<br>
<p align="center">
    <img src="images/led.jpg" height="300" width="400" alt="led">
</p>

citation : image of led interfacing from w3schools.com

## Push button :
The standard form of switch used in electronics is a push button switch. This push-button SPST switches are used to either make or break a circuit by a simple push action. They generally come in the normally open (NO) configuration.<br>
Toggle Switches make or break a circuit by moving a lever up or down and comes in SPST, SPDT, and DPDT configurations. Some toggle switches have an off position in the center, and the circuit can be turned on by moving the lever in either the up or down direction.<br>
<p align="center">
    <img src="images/push-button.jpg" height="300" width="400" alt="push-button">
</p>

citation : image of button interfacing from raspberrypihq.com

## Buzzer :
A Piezo buzzer is a device that is used to generate beep sound (generally a warning or alert in embedded system). It is a two leg device the longer leg is positive. If voltage is supplied to it, it generates beep sound.  They work by using a piezo crystal, a special material that changes shape when voltage is applied to it.  If the crystal pushes against a diaphragm, like a tiny speaker cone, it can generate a pressure wave which the human ear picks up as sound. <br>
Through analog write (PWM signal ) volume of beep sound can be controlled. If a buzzer is switched with different time intervals it generates a melody.<br>
<p align="center">
    <img src="images/buzzer.jpg" height="400" width="400" alt="buzzer">
</p>

citation : image of buzzer interfacing from electropeak.com