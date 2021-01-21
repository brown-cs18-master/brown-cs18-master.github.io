package lec02;

public class Dillo {
    public int length;
    public boolean isDead;

    public Dillo(int len, boolean isD) {
        this.length = len;
        this.isDead = isD;
    }

    /**
     * determines whether a dillo can be used for shelter
     * @return whether the dillo is dead and larger than 60
     */
    public boolean canShelter() {
        return this.length > 60 && this.isDead;
    }
}

