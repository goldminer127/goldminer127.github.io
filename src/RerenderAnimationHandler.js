class RerenderAnimationHandler
{
    constructor() 
    {
        this.shouldNotPlayAnimation = ""; //Assignment will be component names that should not be rerendered. If not a component name, a section name or id will be used instead
    }
    setShouldNotPlayAnimation(componentName)
    {
        this.shouldNotPlayAnimation = componentName;
    }
}
export default RerenderAnimationHandler;