const {app, BrowserWindow, ipcMain} = require('electron')
const path = require('path')

let ventana

function createWindow(){
    const ventana = new BrowserWindow({
        width: 500,
        height: 400,
        webPreferences:{
            preload: path.join(app.getAppPath(),'preload.js')
        }
    });
    ventana.loadFile('index.html')
}

let ventana2

function createWindow2(){
    ventana2 = new BrowserWindow({
        width: 400,
        height: 200,
        webPreferences:{
            preload: path.join(app.getAppPath(),'preload.js')
        }
    });
    ventana2.loadFile('segundo.html')
}

ipcMain.on('registroValido',function(event,args){
    console.log(args)
    createWindow2()
    ventana2.webContents.on('did-finish-load',function(){
        ventana2.webContents.send('inicioCorrecto','Bienvenido '+args[0]);
    })
    
})

app.whenReady().then(createWindow)