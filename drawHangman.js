const chalk = require("chalk");

const seven = `
    __________  
    | /     |    
    |/     _o_   
    |       O    
    |      / \\  
    |            
    ===========  
`;

const six = `
    __________  
    | /     |    
    |/     _o_   
    |       O    
    |        
    |            
    ===========  
`;

const five = `
    __________  
    | /     |    
    |/     _o_   
    |           
    |        
    |            
    ===========  
`;

const four = `
    __________  
    | /     |    
    |/        
    |           
    |        
    |            
    ===========  
`;

const three = `
    __________  
    | /       
    |/        
    |           
    |        
    |            
    ===========  
`;

const two = `
    
    |
    |        
    |           
    |        
    |            
    ===========  
`;

const one = `
    
    
            
               
            
                
    ===========  
`;

const zero = `
    
    
            
               
            
                
`;

function drawHangman(mistakeCount) {
    switch (mistakeCount) {
        case 0:
            console.log(chalk.green(zero));
            break;
        case 1:
            console.log(chalk.yellowBright(one));
            break;
        case 2:
            console.log(chalk.yellowBright(two));
            break;
        case 3:
            console.log(chalk.yellow(three));
            break;
        case 4:
            console.log(chalk.yellow(four));
            break;
        case 5:
            console.log(chalk.yellow(five));
            break;
        case 6:
            console.log(chalk.redBright(six));
            break;
        case 7:
            console.log(chalk.red(seven));
            break;

        default:
            console.log(chalk.green(zero));
            break;
    }
}

module.exports = drawHangman;
