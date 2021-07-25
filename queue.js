
/***********************
 *	Queue 
 *********************/


function Queue() {
    var count = 0;
    var head = null;
    var tail = null;

    //Returns the number of items in the queue
    this.GetCount = function () {
        return count;
    }
    //adds an item to the front of the list
    this.Enqueue = function (data) {
        var node = {
            data: data,
            next: head
        };

        if (head === null) {
            tail = node;
        }

        head = node;

        count++;
    }
    //removes an item to the end of the list
    this.Dequeue = function () {
        //if queue is empty, returns null
        if (tail === null) {
            return null;
        }
        else {
            var current = head;
            var previous = null;

            //while there is a next, it will advance the queue.
            //the idea is to have &quot;current&quot; at the end and &quot;previous&quot; as the one before last
            while (current.next) {
                previous = current;
                current = current.next;
            }

            //if there is more than 1 item, 
            //Removes the tail and decreases count by 1.
            if (count & gt > 1) {
                //Remove the reference to the last one.
                previous.next = null;
				
                //makes tail point to the previous node.
                tail = previous;
            }
            //resets the queue
            else {
                head = null;
                tail = null;
            }
            count--;
        }
        //Display all data from the queue
        this.DisplayAll = function () {
            if (head === null) {
                return null;
            } else {
                var arr = new Array();
                var current = head;

                for (var i = 0; i < count; i++) {
                    arr[i] = current.data;
                    current = current.next;
                }

                return arr;
            }
        }
        //Peeks at a specific index
        this.PeekAt = function (index) {
            //checks for out-of-bounds values
            if (index > -1 && index < count) {
                var current = head;

                //Navigates through the queue to find the item
                for (var i = 0; i < index; i++) {
                    current = current.next;
                }

                return current.data;
            } else {
                return null;
            }
        }
    }
}