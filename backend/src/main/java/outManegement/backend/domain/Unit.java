package outManegement.backend.domain;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
public class Unit {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="NAME")
    private String name;

    public Unit(String name) {
        this.name = name;
    }

    public Unit() {

    }
    /*
    private String command;  //소속 enum으로 만들고 싶었으나 너무 많은 관계로 생략 -> 이거는 부대가서 뽑아오는 걸로
    private String battalion;
    private String company; //트리뷰로 바꾸는 작업 필요. 구현하다가 확인해 볼 것.
    private String smallestUnit;
     */
}
