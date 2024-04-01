class RerenderAnimationHandler
{
    constructor() 
    {
        this.shouldNotPlayAnimation = []; //Assignment will be component names that should not be rerendered. If not a component name, a section name or id will be used instead
    }
    setShouldNotPlayAnimation(componentName)
    {
        this.shouldNotPlayAnimation.push(componentName);
        return this.shouldNotPlayAnimation;
    }
    removeShouldNotPlayAnimation(componentName)
    {
        let index = this.shouldNotPlayAnimation.findIndex(entry => entry === componentName);
        if(index !== undefined)
            this.shouldNotPlayAnimation.splice(index, 1);
        return this.shouldNotPlayAnimation;
    }
    resetShouldNotPlayAnimation()
    {
        while(this.shouldNotPlayAnimation.length > 0)
        {
            this.shouldNotPlayAnimation.pop();
        }
    }
}
export default RerenderAnimationHandler;