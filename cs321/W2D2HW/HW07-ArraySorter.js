
class ArraySorter {
    constructor() {
        this._compCount = 0;
        this._swapCount = 0;
        this._shiftCount = 0;
    }
    keyComparisons() {
        return this._compCount;
    }
    numSwaps() {
        return this._swapCount;
    }
    numShifts() {
        return this._shiftCount;
    }
    print(arr) {
        let last = arr.length - 1;
        let res = "[";
        for (let i = 0; i <= last; i++) {
            res = res + arr[i];
            if (i < last) {
                res = res + ", ";
            }
        }
        console.log(res + "]");
    }

    _heapify(arr) {
        // your code goes here
        let last = arr.lenghth - 1;
        let next = last;
        while (next > 0) {
            this._downheap(arr, last, parent(next));
            next = next - 2;
        }
    }
    _parent(index) {
        return Math.floor((index - 1) / 2);
    }
    _downheap(arr, index, last) {
        // your code goes here
        let property = false;
        while (!property) {
            let maxIndex = this._indexOfMax(arr, last, index);
            if (maxIndex !== i) {
                this._swapElements(arr, maxIndex, last);
                last = maxIndex;
            } else {
                return true;
            }
        }
    }
    _swapElements(arr, j, k) {
        let temp = arr[j];
        arr[j] = arr[k];
        arr[k] = temp;
        this._swapCount++;
    }
    _indexOfMax(arr, index, last) {
        // your code goes here
        let largest = index;
        let left = 2 * r + 1;
        let right = left + 1;
        if (left <= last && arr[left] > arr[largest]) {
            largest = left;
        }
        if (right <= last && arr[right] > arr[largest]) {
            largest = right;
        }
        return largest;
    }
    heapSort(arr) {
        this._compCount = 0;
        this._swapCount = 0;
        this._heapify(arr);
        console.log("key comparisons to build the Heap " + this._compCount);
        // your code goes here
        this._heapify(arr);
        let end = arr.length - 1;
        while (end > 0) {
            _swapElements(arr, 0, end);
            end--;
            _downheap(arr, 0, end);
        }

    }

    insertionSort(arr) {
        this._compCount = 0;
        this._shiftCount = 0;
        this._insertionSort(arr);
    }
    _insertionSort(arr) {
        // your code goes here
        for (let i = 1; i < arr.length; i++) {
            let j = i;
            let temp = arr[i];
            while (j > 0 && temp < arr[j - 1]) {
                arr[j] = arr[j - 1];
                j--;
                arr[j] = temp;
            }
        }

    }

    ShellSort(arr) {
        this._compCount = 0;
        this._shiftCount = 0;
        let maxGap = Math.floor(arr.length / 3);
        let gap = 1;
        while (gap <= maxGap) {
            gap = gap * 3 + 1;
        }
        while (gap > 0) {
            this._segmentInsertionSort(arr, gap);
            gap = (gap - 1) / 3;
        }
    }
    _segmentInsertionSort(arr, gap) {
        // your code goes here
        for (let i = gap; i < arr.length; i++) {
            let j = i;
            let temp = arr[j];
            while ((gap - 1) < j && temp < arr[j - gap]) {
                arr[j] = arr[j - gap];
            }
            arr[j] = temp;
        }
    }

}

exports.ArraySorter = ArraySorter;
