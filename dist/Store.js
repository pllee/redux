"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const INIT_ACTION = { type: '@@redux/INIT' };
class Store {
    constructor({ preloadedState, reducer }) {
        this.state = preloadedState;
        this.listeners = [];
        this.reducer = reducer;
        // This actually sets up the store's default state
        this.dispatch(INIT_ACTION);
    }
    getState() {
        return this.state;
    }
    /**
     * Call the one and only reducer with the current state and passed in action.  The state returned by
     * the reducer will be the current state.
     */
    dispatch(action) {
        const nextState = this.reducer(this.state, action);
        this.state = nextState;
        this.listeners.forEach(listener => listener());
        return action;
    }
    subscribe(listener) {
        this.listeners.push(listener);
        // Return a function that removes the listener
        return () => {
            const listenerIndex = this.listeners.indexOf(listener);
            if (listenerIndex > -1) {
                this.listeners.splice(listenerIndex, 1);
            }
        };
    }
    replaceReducer(reducer) {
        this.reducer = reducer;
    }
}
exports.default = Store;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RvcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9saWIvU3RvcmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxNQUFNLFdBQVcsR0FBRyxFQUFDLElBQUksRUFBRSxjQUFjLEVBQUMsQ0FBQTtBQUUxQztJQUNFLFlBQVksRUFBRSxjQUFjLEVBQUcsT0FBTyxFQUFFO1FBQ3RDLElBQUksQ0FBQyxLQUFLLEdBQUcsY0FBYyxDQUFDO1FBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBRXBCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLGtEQUFrRDtRQUNsRCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCxRQUFRO1FBQ04sTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUVEOzs7T0FHRztJQUNILFFBQVEsQ0FBQyxNQUFNO1FBQ2IsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUUvQyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxTQUFTLENBQUMsUUFBUTtRQUNoQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM5Qiw4Q0FBOEM7UUFDOUMsTUFBTSxDQUFDLEdBQUcsRUFBRTtZQUNSLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3ZELEVBQUUsQ0FBQSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM1QyxDQUFDO1FBQ0wsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztJQUVELGNBQWMsQ0FBQyxPQUFPO1FBQ2xCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQzNCLENBQUM7Q0FDRjtBQXhDRCx3QkF3Q0MiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBJTklUX0FDVElPTiA9IHt0eXBlOiAnQEByZWR1eC9JTklUJ31cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmUge1xuICBjb25zdHJ1Y3Rvcih7IHByZWxvYWRlZFN0YXRlICwgcmVkdWNlciB9KSB7XG4gICAgdGhpcy5zdGF0ZSA9IHByZWxvYWRlZFN0YXRlO1xuICAgIHRoaXMubGlzdGVuZXJzID0gW107XG5cbiAgICB0aGlzLnJlZHVjZXIgPSByZWR1Y2VyO1xuICAgIC8vIFRoaXMgYWN0dWFsbHkgc2V0cyB1cCB0aGUgc3RvcmUncyBkZWZhdWx0IHN0YXRlXG4gICAgdGhpcy5kaXNwYXRjaChJTklUX0FDVElPTik7XG4gIH1cblxuICBnZXRTdGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsIHRoZSBvbmUgYW5kIG9ubHkgcmVkdWNlciB3aXRoIHRoZSBjdXJyZW50IHN0YXRlIGFuZCBwYXNzZWQgaW4gYWN0aW9uLiAgVGhlIHN0YXRlIHJldHVybmVkIGJ5XG4gICAqIHRoZSByZWR1Y2VyIHdpbGwgYmUgdGhlIGN1cnJlbnQgc3RhdGUuXG4gICAqL1xuICBkaXNwYXRjaChhY3Rpb24pIHtcbiAgICBjb25zdCBuZXh0U3RhdGUgPSB0aGlzLnJlZHVjZXIodGhpcy5zdGF0ZSwgYWN0aW9uKTtcbiAgICB0aGlzLnN0YXRlID0gbmV4dFN0YXRlO1xuICAgIHRoaXMubGlzdGVuZXJzLmZvckVhY2gobGlzdGVuZXIgPT4gbGlzdGVuZXIoKSk7XG5cbiAgICByZXR1cm4gYWN0aW9uO1xuICB9XG5cbiAgc3Vic2NyaWJlKGxpc3RlbmVyKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gICAgLy8gUmV0dXJuIGEgZnVuY3Rpb24gdGhhdCByZW1vdmVzIHRoZSBsaXN0ZW5lclxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGxpc3RlbmVySW5kZXggPSB0aGlzLmxpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKTtcbiAgICAgICAgaWYobGlzdGVuZXJJbmRleCA+IC0xKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVycy5zcGxpY2UobGlzdGVuZXJJbmRleCwgMSk7XG4gICAgICAgIH0gIFxuICAgIH1cbiAgfVxuXG4gIHJlcGxhY2VSZWR1Y2VyKHJlZHVjZXIpIHtcbiAgICAgIHRoaXMucmVkdWNlciA9IHJlZHVjZXI7XG4gIH1cbn0iXX0=