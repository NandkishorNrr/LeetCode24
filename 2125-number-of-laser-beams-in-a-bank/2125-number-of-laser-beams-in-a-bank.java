class Solution {
    public int numberOfBeams(String[] bank) {
        int beam = 0;
        for (int i = 0; i < bank.length - 1; i++){
            char[] srcDev = bank[i].toCharArray();
            int trgRw;
            boolean noBeam_trgRw = true;

            for (int j = 0; j < srcDev.length; j++) {
                if (srcDev[j] == '0')
                    continue;
                else {
                    trgRw = i + 1;
                    noBeam_trgRw = true;
                    while (trgRw < bank.length && noBeam_trgRw){
                        char[] trgDev = bank[trgRw].toCharArray();
                        for (int k = 0; k < trgDev.length; k++) {
                            if (trgDev[k] == '1') {
                                noBeam_trgRw = false;
                                beam++;
                            }
                        }
                        trgRw++;
                    }

                }
            }
        }
        return beam;
    }
}