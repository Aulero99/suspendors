import { logger } from "./Logger"

let under = []
let xxs = []
let xs = []
let sm = []
let md = []
let lg = []
let xl = []
let xxl = []
let over = [] 
let landscape = []
let portrait = []


class Registrar{
    constructor(){ 
        logger.log('Registrar Online')
        window.addEventListener("under", (e) => {this.trigger('under')}, false)
        window.addEventListener("xxs", (e) => {this.trigger('xxs')}, false)
        window.addEventListener("xs", (e) => {this.trigger('xs')}, false)
        window.addEventListener("sm", (e) => {this.trigger('sm')}, false)
        window.addEventListener("md", (e) => {this.trigger('md')}, false)
        window.addEventListener("lg", (e) => {this.trigger('lg')}, false)
        window.addEventListener("xl", (e) => {this.trigger('xl')}, false)
        window.addEventListener("xxl", (e) => {this.trigger('xxl')}, false)
        window.addEventListener("over", (e) => {this.trigger('over')}, false)
        window.addEventListener("portrait", (e) => {this.trigger('portrait')}, false)
        window.addEventListener("landscape", (e) => {this.trigger('landscape')}, false)
    }

    trigger(flag){
        logger.log('Triggering ' + flag)
        if(flag == 'under'){ this.runEvents(under); return; }
        if(flag == 'sm'){ this.runEvents(sm); return; }
        if(flag == 'md'){ this.runEvents(md); return; }
        if(flag == 'lg'){ this.runEvents(lg); return; }
        if(flag == 'xl'){ this.runEvents(xl); return; }
        if(flag == 'xxl'){ this.runEvents(xxl); return; }
        if(flag == 'over'){ this.runEvents(over); return; }
        if(flag == 'landscape'){ this.runEvents(landscape); return;}
        if(flag == 'portrait'){ this.runEvents(portrait); return; }
        return
    }

    runEvents(arr){
        if(arr.length < 1){ return }
        arr.forEach(e => {
            if(typeof e === 'function'){ e() }
        });
    }

    setEventFlags(fn, flag){
        if(typeof fn === 'function'){ 
            logger.log('valid function')
            if(flag == 'under'){ under.push(fn); return; }
            if(flag == 'xxs'){ xxs.push(fn); return; }
            if(flag == 'xs'){ xs.push(fn); return; }
            if(flag == 'sm'){ sm.push(fn); return; }
            if(flag == 'md'){ md.push(fn); return; }
            if(flag == 'lg'){ lg.push(fn); return; }
            if(flag == 'xl'){ xl.push(fn); return; }
            if(flag == 'xxl'){ xxl.push(fn); return; }
            if(flag == 'over'){ over.push(fn); return; }
            if(flag == 'landscape'){ landscape.push(fn); return; }
            if(flag == 'portrait'){ portrait.push(fn); return; }
            return
        }
        else{ logger.log('not a valid function') }
        return
    }

    under(fn){ 
        logger.log('registering function: ', fn, ' at breakpoint under')
        this.setEventFlags(fn, 'under') 
    }
    xxs(fn){
        logger.log('registering function: ', fn, ' at breakpoint sm')
        this.setEventFlags(fn, 'xxs') 
    }
    xs(fn){
        logger.log('registering function: ', fn, ' at breakpoint sm')
        this.setEventFlags(fn, 'xs') 
    }
    sm(fn){
        logger.log('registering function: ', fn, ' at breakpoint sm')
        this.setEventFlags(fn, 'sm') 
    }
    md(fn){
        logger.log('registering function: ', fn, ' at breakpoint md')
        this.setEventFlags(fn, 'md') 
    }
    lg(fn){
        logger.log('registering function: ', fn, ' at breakpoint lg')
        this.setEventFlags(fn, 'lg') 
    }
    xl(fn){ 
        logger.log('registering function: ', fn, ' at breakpoint xl')
        this.setEventFlags(fn, 'xl') 
    }
    xxl(fn){ 
        logger.log('registering function: ', fn, ' at breakpoint xxl')
        this.setEventFlags(fn, 'xxl') 
    }
    over(fn){
        logger.log('registering function: ', fn, ' at breakpoint over')
        this.setEventFlags(fn, 'over') 
    }
    landscape(fn){
        logger.log('registering function: ', fn, ' at orientation landscape')
        this.setEventFlags(fn, 'landscape') 
    }
    portrait(fn){
        logger.log('registering function: ', fn, ' at orientation portrait')
        this.setEventFlags(fn, 'portrait')
    }

}
export const registrar = new Registrar()