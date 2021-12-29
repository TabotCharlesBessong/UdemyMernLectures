
Developers suffer from deprication problems specially from the backend which is node . 

i will advice you to always read your errors and try to understand what the deprication message reads

However , here is an exmapl to use whenever you encounter a problem from mongoose.connect (I will be adding some more in the nearest future)

{useNewUrlParser:true},
{useUnifiedTopology}

The line above should come a comma after the last word in the statement where the error was allocated