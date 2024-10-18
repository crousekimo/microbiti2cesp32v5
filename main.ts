//% weight=0 color=#ECAA05 icon="\uf0ad" block="microbituartesp32v1"
namespace microbituartesp32v1 {

     export enum openweathermapmenu {
        Lon = 1,
        Lat = 2,
        Temperature = 3,
        Pressure = 4,
        Humidity = 5,
	WindSpeed = 6
     }
     export enum pin_mode {
        OUTPUT = 1,
        INPUT = 2
     }
     export enum ntptime {
        Your = 0,
        Month = 1,
        Day = 2,
        Hour = 3,
        Min = 4,
	Sec = 5
     }
     let datelist: string[] = []
     let mqttlist: string[] = []	
     let nptgettime="";	
     let mqttmessage="";
     let mqtttopic="";
     
     export enum value555 {
        field1 = 1 ,
        field2 = 2,
        field3 = 3,
        field4 = 4,
        field5 = 5,
        field6 = 6,
        field7 = 7,
        field8 = 8
     }
     let aa=0;
    //% group="1.Setup"
    //% blockId=setMicrobit block="Initialize Microbit |TX %tx|RX %rx|Baud rate %baudrate "
    //% tx.defl=SerialPin.P2
    //% rx.defl=SerialPin.P12
    //% weight=102
    //% blockExternalInputs = 1
    export function setMicrobit(tx: SerialPin, rx: SerialPin, baudrate: BaudRate) {
	basic.pause(2000)
        serial.redirect(
            tx,
            rx,
            baudrate
        )

    }
    //% group="1.Setup"
    //% blockId=iprequest block="Read WIFI IP"
    //% weight=50
    //% blockExternalInputs = 1
    export function iprequest():string {
        serial.writeLine("iprequest="+"\\n")
	basic.pause(100)
        let a=serial.readString()
	return a
    }
    //% group="2.MQTT"  
    //% blockId=subMqtt block="Subscribe mqtt %topic"
    //% weight=100 
    export function subMqtt(topic: string):void {
         serial.writeLine("sebmqtt="+topic+"\\n")
	 basic.pause(100)
    }
    //% group="2.MQTT"  
    //% blockId=ReceiveMqttTopic block="receive mqtt topic"
    //% weight=98	
    export function ReceiveMqttTopic():string {
	serial.writeLine("mqttrec="+"\\n")
	basic.pause(100)
        let a=serial.readString()
	mqttlist=a.split(",")
	return mqttlist[0]
    }  
    //% group="2.MQTT"  
    //% blockId=ReceiveMqttMessage block="receive mqtt message"
    //% weight=97 	
    export function ReceiveMqttMessage():string {
        return mqttlist[1]
    }  

    //% group="2.MQTT"  
    //% blockId=clearmqtt block="clear mqtt topic and message"
    //% weight=57 
    export function clearmqtt():void {
        serial.writeLine("clearmqtt="+"\\n")
	basic.pause(100)
    }  
	
	
    //% group="2.MQTT"  
    //% blockId=sendmqtt block="send mqtt topic %topic | message %message "
    //% weight=56 
    export function sendmqtt(topic: string, message: string):void {
        serial.writeLine("sendmqtt="+topic+","+message+"\\n")
	basic.pause(100)
    }  
    //% group="3.NTP"  
    //% blockId=ntpsetup block="NTP setup"
    //% weight=70
    export function ntpsetup():void {
        serial.writeLine("ntps="+"\\n") 
	basic.pause(200)
    }
     //% group="3.NTP"  
    //% blockId=ntpget block="ntpget"
    //% weight=50
    export function ntpget():void {
        serial.writeLine("ntpget1="+"\\n")
	basic.pause(100)
        nptgettime=serial.readString()
	datelist=nptgettime.split(",")
    }
    //% group="3.NTP"  
    //% blockId=ntpgettime block="read %time1"
    //% weight=30
    export function ntpgettime(time1: ntptime):number {
        return parseFloat(datelist[time1])
    }

     //% group="4.google"  
    //% blockId=google1 block="set google form question %google_number as %google_ans" 
    //% weight=70
    export function google1(google_number: number, google_ans: string):void {
        serial.writeLine("google1="+convertToText(google_number)+","+google_ans+"\\n")
	basic.pause(200)
    }
	
    //% group="4.google"  
    //% blockId=google2 block="set google form url as %google_url" 
    //% weight=70
    export function google2(google_url: string):void {
        serial.writeLine("google2="+convertToText(google_url)+"\\n")
	basic.pause(200)
    }
	
     //% group="4.google"  
    //% blockId=google block="Send to Google form"
    //% weight=30
    export function google():void {
        serial.writeLine("google="+"\\n") 
	basic.pause(200)
    }
	
    //% group="5.HTTP_COMMAND"
    //% blockId=http_command block="Read HTTP COMMAND"
    //% weight=29
    //% blockExternalInputs = 1
    export function http_command():string {
        serial.writeLine("http_r="+"\\n")
	basic.pause(100)
        let a=serial.readString()
	return a
    }
	
    //% group="5.HTTP_COMMAND"
    //% blockId=clear_httpcommand block="Clear HTTP COMMAND"
    //% weight=28
    export function clear_httpcommand():void {
        serial.writeLine("clear_httpcommand="+"\\n") 
	basic.pause(200)
    }
	
    //% group="5.HTTP_COMMAND"
    //% blockId=http_command1 block="Microbit data %data"
    //% weight=27
    export function http_command1(data: string):void {
        serial.writeLine("http_d="+data+"\\n") 
	basic.pause(200)
    }
    //% group="6.HTTP_HTML"
    //% blockId=http_refresh block="Refresh web page %num sec"
    //% weight=26
    export function http_refresh(num: string):string {
        return "<meta http-equiv=refresh content="+num+">"
    }
    //% group="6.HTTP_HTML"
    //% blockId=http_center block="center"
    //% weight=25
    export function http_center():string {
        return "<center>"
    }
    //% group="6.HTTP_HTML"
    //% blockId=http_center1 block="center end"
    //% weight=24
    export function http_center1():string {
        return "</center>"
    }

    //% group="6.HTTP_HTML"
    //% blockId=http_br block="br"
    //% weight=23
    export function http_br():string {
        return "<br>"
    }

    //% group="6.HTTP_HTML"
    //% blockId=http_href block="href send command: %data text: %text"
    //% weight=22
    export function http_href(data: string, text: string):string {
        return "<a href=http_d2="+data+">"+text+"</a>"
    }
    //% group="6.HTTP_HTML"
    //% blockId=http_space block="insert %num space"
    //% num.min=1 num.max=1000 num.defl=1
    //% weight=21
    export function http_space(num: number):string {
	let a="";
	for (let i=0;i<num;i++)
		a=a+"&nbsp;"
        return a
    }

    //% group="6.HTTP_HTML"
    //% blockId=http_p block="paragraph font size %num "
    //% num.min=1 num.max=1000 num.defl=1
    //% weight=20
    export function http_p(num: number):string {
        return "<p style=font-size:"+num+"vw;>"
    }
    //% group="6.HTTP_HTML"
    //% blockId=http_p1 block="paragraph end"
    //% weight=19
    export function http_p1():string {
        return "</p>"
    }	
    //% group="7.Make.com"  
    //% blockId=sendmake block="send Make.com key %key | value1 %value1 | value2 %value2 | value3 %value3"
    //% weight=15
    export function sendmake(key: string, value1: string, value2: string, value3: string):void {
	value1="?value1="+value1+"&value2="+value2+"&value3="+value3;
        serial.writeLine("httpclientget=hook.eu2.make.com,/"+key+"/"+value1) 
	basic.pause(200)
    }
	
    function sendi2cmessage(command: string):void {
        for (let index = 0; index <= command.length-1; index++) {
        	pins.i2cWriteNumber(
        	8,
        	command.charCodeAt(index),
        	NumberFormat.Int8LE,
        	false
        	)
        }
        pins.i2cWriteNumber(
	8,
	10,
	NumberFormat.Int8LE,
	false
	)
    } 
    
    function receivei2cmessage(command: string):string {
    let i2cmessage2 = ""
    let aa: number[] = []
    for (let index2 = 0; index2 <= command.length-1; index2++) {
        pins.i2cWriteNumber(
        8,
        command.charCodeAt(index2),
        NumberFormat.Int8LE,
        false
        )
    }

    pins.i2cWriteNumber(
    8,
    10,
    NumberFormat.Int8LE,
    false
    )
    basic.pause(300)
    i2cmessage2=""
    let dd = pins.i2cReadBuffer(8,200,false)
    for (let index = 0; index <= 200; index++) {

        let messagecheck2 = dd.getNumber(NumberFormat.Int8LE, index)
        if (messagecheck2 == -1) {
            break;
        }else {
            i2cmessage2 = i2cmessage2 + String.fromCharCode(messagecheck2)
	}
    }
    return i2cmessage2	    
    }

    function receivei2cmessage2(command: string):string {
    let i2cmessage2 = ""
    let aa: number[] = []
    for (let index2 = 0; index2 <= command.length-1; index2++) {
        pins.i2cWriteNumber(
        8,
        command.charCodeAt(index2),
        NumberFormat.Int8LE,
        false
        )
    }
    pins.i2cWriteNumber(
    8,
    10,
    NumberFormat.Int8LE,
    false
    )
    basic.pause(2000)
    i2cmessage2=""
    let dd = pins.i2cReadBuffer(8,400,false)
    for (let index = 0; index <= 400; index++) {
        let messagecheck2 = dd.getNumber(NumberFormat.Int8LE, index)
        if (messagecheck2 == -1) {
            break;
        }else {
            i2cmessage2 = i2cmessage2 + String.fromCharCode(messagecheck2)
	}
    }
    return i2cmessage2	    
    }

}
