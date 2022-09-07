package outManegement.backend.domain;

import org.junit.jupiter.api.Test;
import outManegement.backend.domain.enumcollect.OutType;
import outManegement.backend.domain.outlist.Excursion;
import outManegement.backend.domain.outlist.Out;
import outManegement.backend.domain.outlist.OverNight;
import outManegement.backend.domain.outlist.Vacation;

public class domainTest {

    @Test
    public void createOut(){
        Out vac = new Vacation();
        Out exc = new Excursion();
        Out over = new OverNight();
    }
}
