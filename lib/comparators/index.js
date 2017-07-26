class Comparator {
  constructor(direction) {
    if (direction === 'desc') {
      this.compare = this.compareDesc;
      return;
    }

    this.compare = this.compareInc;
  }

  static getComparatorByType(type, direction) {
    if (type === 'string') {
      return new StringsComparator(direction);
    }

    return new NumbersComparator(direction);
  }
}

class StringsComparator extends Comparator {
  compareDesc(first, second) {
    return first.localeCompare(second);
  }

  compareInc(first, second) {
    return second.localeCompare(first);
  }
}

class NumbersComparator extends Comparator {
  compareDesc(first, second) {
    return second - first;
  }

  compareInc(first, second) {
    return first - second;
  }
}

module.exports = { StringsComparator, NumbersComparator, Comparator };
