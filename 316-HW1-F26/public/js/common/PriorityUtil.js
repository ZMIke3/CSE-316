



export class PriorityUtil {


    /**
     * Returns a valid high priority.
     */
    static get PRIORITY_HIGH() {
        return "High";
    }

    /**
     * Returns a valid medium priority.
     */
    static get PRIORITY_MEDIUM() {
        return "Medium";
    }

    /**
     * Returns a valid low priority.
     */
    static get PRIORITY_LOW() {
        return "Low";
    }

    /**
     * Returns valid priority list
    */
    static values() {
        return [PriorityUtil.PRIORITY_HIGH, PriorityUtil.PRIORITY_MEDIUM, PriorityUtil.PRIORITY_LOW];
    }


    /**
     * @param {string} string priority value
     * @return {string} Priority None
     */
    static clean(value) {
        if (value != "High" && value != "Medium" && value != "Low") {
            return null;
        } 

        return value;
    }

}